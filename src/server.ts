import app from './index';

const port = app.get('env').port;
app.listen(port, () => console.log(`Ouvindo na porta ${port}`));
