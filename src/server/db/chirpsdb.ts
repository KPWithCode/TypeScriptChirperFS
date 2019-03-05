import { Query } from './index';

const all = async () => Query('SELECT * FROM Chirps')


const oneChirp = async (id: number) =>
  Query(
    'SELECT * FROM Chirps WHERE id = ?', [id]
  );

const post = async (userid: number, chirptext: string) =>
  Query(`INSERT INTO Chirps (userid, chirp) VALUES (${userid}, ${chirptext}`);
  

const remove = async (id: number) => {
  Query('DELETE FROM Chirps WHERE id = ?', [id]);
};

const update = async (text: string, name: string, id: number) => {
  Query('CALL sp_updating(?,?,?)', [id, text, name])
};

export default {
  all,
  oneChirp,
  post,
  remove,
  update
}