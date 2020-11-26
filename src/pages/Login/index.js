import Form from '../../components/sections/Form';
import Logo from '../../components/reusables/Logo';

import { FullBackground } from '../../styles/global';

const Login = () => {
	return (
		<FullBackground>
			<Logo />
			<Form type="login" title="Entrar" />
		</FullBackground>
	)
}

export default Login;