const pooledDownload = async (connect, save, downloadList, maxConcurrency) => {
  const connections = [];

  try {
    // Establish connections up to the specified concurrency limit
    for (let i = 0; i < maxConcurrency; i++) {
      const connection = await connect();
      if (connection) {
        connections.push(connection);
      } else {
        break; // Stop creating connections if no more can be made
      }
    }
    // Function to handle downloading and saving files
    const downloadAndSave = async (url) => {
      let connection = connections.pop(); // Get a connection from the pool

      try {
        while (!connection) {
          // Refill the connection pool if it's empty
          connection = await connect();
          if (connection) {
            connections.push(connection);
          }
        }

        const { download, close } = connection;
        const result = await download(url); // Download the file
        await save(result); // Save the downloaded content
      } catch (error) {
        throw error; // Propagate any download or save errors
      } finally {
        if (connection) {
          connections.push(connection); // Return the connection to the pool
        }
      }
    };

    // Download and save all files concurrently
    await Promise.all(downloadList.map((url) => downloadAndSave(url)));
  } finally {
    // Close all connections in the pool
    await Promise.all(connections.map((connection) => connection.close()));
  }
};

module.exports = pooledDownload;
