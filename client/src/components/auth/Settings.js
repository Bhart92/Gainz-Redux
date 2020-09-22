import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { logout, deleteAccount } from '../../actions/auth';

const Settings = ({ logout, isAuthenticated, deleteAccount }) => {
    const customStyles = {
        content : {
          position              : 'fixed',
          top                   : 'unset',
          left                  : 'unset',
          right                 : '85px',
          bottom                : '65px',
          height                : '150px',
          padding               : '0',
          borderRadius          : '10px',
          background            : '#393E46',
          border                : 'none',
          boxShadow            : '0 0 5px -0.5px #66A182'
        }
    };
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
        document.querySelector('.fa-cog').classList.toggle('cog-active');
        document.querySelector('body').classList.toggle('overflow');

    }
    function closeModal(){
        setIsOpen(false);
        document.querySelector('.fa-cog').classList.toggle('cog-active');
        document.querySelector('body').classList.toggle('overflow');
    }
    return (
        <Fragment>
            <div className='settings--icon' onClick={modalIsOpen ? closeModal : openModal}>
                <i className="fas fa-cog animate__animated"></i>
            </div>
            <Modal
            className='dashboard--navBar--modal'
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            closeTimeoutMS={200}
            contentLabel="Example Modal"
            ariaHideApp={false}
            >
                <div id='modal--container' className='modal--container'> 
                    <ul>
                        <li onClick={() => {
                            document.querySelector('body').classList.toggle('overflow');
                            deleteAccount()
                        }}>
                            <i class="fas fa-user-times"></i> &nbsp;Delete Account
                        </li>
                        <li onClick={e => {
                            document.querySelector('body').classList.toggle('overflow');
                            logout()
                        }}>
                            <i class="fas fa-sign-out-alt"></i> &nbsp;Logout
                        </li>
                    </ul>
                </div>
            </Modal>
        </Fragment>
    );
};

Settings.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {logout, deleteAccount})(Settings);