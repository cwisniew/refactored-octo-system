/*
 * This software Copyright Craig Wisniewski, and
 * licensed under the Affero GPL Version 3 or, at your option, any later
 * version.
 *
 * This Source Code is distributed in the hope that it will be
 * useful, but WITHOUT ANY WARRANTY; without even the implied warranty
 * of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 *
 * You should have received a copy of the GNU Affero General Public
 * License * along with this source Code.  If not, please visit
 * <http://www.gnu.org/licenses/> and specifically the Affero license
 * text at <http://www.gnu.org/licenses/agpl.html>.
 */

import React, { ReactElement } from 'react';
import './App.css';
import { DIProvider } from './components/dependency-injection/di-provider';
import { LoginDialog } from './components/login/login-dialog';
import { Provider } from 'react-redux';
import { store } from './state';

const App = (): ReactElement => {
  return (
    <DIProvider>
      <Provider store={store}>
        <LoginDialog />
        <div className="App">
          <header className="App-header">
            VTT2
            <LoginDialog />
          </header>
        </div>
      </Provider>
    </DIProvider>
  );
};

export default App;
