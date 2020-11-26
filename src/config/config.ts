interface IConfig {
  DB: {
    URI: string;
  };
  PORT: string | number;
}

export default <IConfig>{
  DB: {
    URI: process.env.DB_URI || 'mongodb://localhost/nest-tutorial',
  },
  PORT: process.env.PORT || 4000,
};
