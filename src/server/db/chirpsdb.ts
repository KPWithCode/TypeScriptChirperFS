import { Query } from './index';

const all = async () => Query('SELECT * FROM Chirps')


const oneChirp = async (id: number) =>
  Query(
    'SELECT * FROM Chirps WHERE id = ?', [id]
    // "select u.name, c.text as chirp from users u join chirps c on u.id =  c.userid where c.id = ?;",
    // [id]
  );

const post = async (id: number, text: string, name: string) =>
  Query(
    "CALL sp_checking(?,?,?)", [text, name, id]
  );

const remove = async (id: number) => {
  Query("CALL sp_deleting(?)", [id]);
};

const update = async (text: string, name: string, id: number) => {
  Query('CALL sp_updating(?,?,?)', [id, text, name]);
};

export default {
  all,
  oneChirp,
  post,
  remove,
  update
}