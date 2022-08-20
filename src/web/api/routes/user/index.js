import { Router } from 'express';
import { newUserRouterPath, allUserRouterPath, loginRouterPath } from '../constant';
import { userController } from '../../controllers';
const router = Router();

router.post(newUserRouterPath, userController.registerUser);
router.get(allUserRouterPath, userController.getAllUser);
router.post(loginRouterPath, userController.loginUser);

export { router };
