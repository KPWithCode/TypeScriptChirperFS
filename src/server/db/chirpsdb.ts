import { Query } from './index';

const all = async () => Query(
  'SELECT * FROM Chirps ORDER BY _created DESC'
)


const oneChirp = async (userid: number) =>
  Query(
    'SELECT * FROM Chirps WHERE id = ?', [userid]
  );

const post = async ( chirptext: string, userid: string, ) =>
  Query(`INSERT INTO Chirps ( userid, chirptext) VALUES (${userid}, '${chirptext}')`);


const remove = async (id: number) => {
  Query(`DELETE FROM Chirps WHERE id =${id}`);
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