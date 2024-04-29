import { serverAxios } from '@/apis/util/commons';

const server = serverAxios();

const url = '/mypage';

async function getProfileInfo(key, success, fail) {
    await server.get(`${url}/somelink/${key}`).then(success).catch(fail);
}

export { getProfileInfo };
