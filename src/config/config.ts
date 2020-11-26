interface IConfig {
  DB: {
    URI: string;
  };
  PORT: string | number;
}

export default <IConfig>{
  DB: {
    URI: process.env.DB_URI || 'mongodb://mongo:27017/nest',
  },
  PORT: process.env.PORT || 4000,
};
