/**
 * Defines the routes for the application
 */

import { Router } from 'express';
import AppController from '../controllers/AppController';
import UsersController from '../controllers/UsersController';
import AuthController from '../controllers/AuthController';
import FilesController from '../controllers/FilesController';

const router = Router();

/**
 * Route to get the status of the application.
 * @name GET /status
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
router.get('/status', async (req, res) => AppController.getStatus(req, res));

/**
 * Route to get the statistics of the application.
 * @name GET /stats
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
router.get('/stats', async (req, res) => AppController.getStats(req, res));

/**
 * Route to post new user.
 * @name POST /users
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
router.post('/users', async (req, res) => UsersController.postNew(req, res));

/**
 * Route to connect a user.
 * @name GET /connect
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
router.get('/connect', async (req, res) => AuthController.getConnect(req, res));

/**
 * Route to disconnect a user.
 * @name GET /disconnect
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
router.get('/disconnect', async (req, res) => AuthController.getDisconnect(req, res));

/**
 * Route to get the authenticated user's information.
 * @name GET /users/me
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
router.get('/users/me', async (req, res) => UsersController.getMe(req, res));

/**
 * Route to upload a file.
 * @name POST /files
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
router.post('/files', async (req, res) => FilesController.postUpload(req, res));

/**
 * Route to retrieve a file document based on the ID.
 * @name GET /files/:id
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
router.get('/files/:id', async (req, res) => FilesController.getShow(req, res));

/**
 * Route to retrieve all users file documents for a specific parentId and with pagination.
 * @name GET /files
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
router.get('/files', async (req, res) => FilesController.getIndex(req, res));

export default router;
