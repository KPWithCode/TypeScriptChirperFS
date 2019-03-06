import { Query } from './index';

const all = async () => Query(
  'SELECT * FROM Chirps'
)


const oneChirp = async (userid: number) =>
  Query(
    'SELECT * FROM Chirps WHERE id = ?', [userid]
  );

const post = async (id: number, userid:string, chirptext: string) =>
  Query(`INSERT INTO Chirps (id,userid, chirptext) VALUES (${id},${userid},'${chirptext}')`);


const remove = async (id: number) => {
  Query('DELETE FROM Chirps WHERE id = ?', [id]);
};

const put = async (chirptext: string, id: number) => {
  Query(`UPDATE Chirps SET chirptext = '${chirptext}' WHERE id = ${id} `)
};

export default {
  all,
  oneChirp,
  post,
  remove,
  put
}