import { Redirect } from 'react-router'
export function RenderRedirect(site , state) {
    const { redirect } = state;
    if (redirect) {
      return <Redirect to={site}/>;
    }
}
export default RenderRedirect;