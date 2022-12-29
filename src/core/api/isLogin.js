import { getCookie } from './cookie';

const isLogin = () => !!getCookie('accessToken');
export default isLogin;
