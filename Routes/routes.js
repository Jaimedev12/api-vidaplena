const express = require('express');
const pamController = require('../controllers/pamController');
const roleController = require('../controllers/roleController');
const genderController = require('../controllers/genderController');
const personController = require('../controllers/personController');
const groupTypeController = require('../controllers/groupTypeController')
const dimensionController = require('../controllers/dimensionController');
const instructionController = require('../controllers/instructionController');
const healthDataController = require('../controllers/healthDataController');
const pamGroupController = require('../controllers/pamGroupController');
const pamTestController = require('../controllers/pamTestController');
const pamTestResultController = require('../controllers/pamTestResultController');
const pamTestAnswerController = require('../controllers/pamTestAnswerController');
const answerController = require('../controllers/answerController');
const recommendationController = require('../controllers/recommendationController');
const questionController = require('../controllers/questionController');
const testController = require('../controllers/testController');
const testWeightController = require('../controllers/testWeightController');

// ----------------- Controllers -----------------
//const {test} = require('./controllers/testController');

router = express.Router();

// ----------------- Rutas -----------------
router.get('/', (req, res) => {
    res.send("Hello World!");
});
// pam Controller
router.get('/get-pams', pamController.getPams);
router.get('/get-pam/:id', pamController.getPam);
router.post('/add-pam', pamController.addPam);
router.put('/edit-pam/:id', pamController.editPam);
router.delete('/delete-pam/:id', pamController.deletePam);
router.get('/get-pams-by-group/:id', pamController.getPamByGroupId);
router.get('/get-pams-by-doctor/:id', pamController.getPamsByDoctorId);

//person Controller
router.get('/get-persons', personController.getPersons);
router.get('/get-person/:id', personController.getPerson);
router.post('/add-person', personController.addPerson);
router.put('/edit-person/:id', personController.editPerson);
router.delete('/delete-person/:id', personController.deletePerson);
router.get('/get-persons-by-role/:id', personController.getPersonsByRole);
router.get('/get-persons-by-gender/:id', personController.getPersonsByGender);
router.get('/get-persons-by-name', personController.getPersonsByName);
router.get('/get-person-by-email', personController.getPersonsByEmail);

// role Controller
router.get('/get-roles', roleController.getRoles);
router.get('/get-role/:id', roleController.getRoleById);
router.post('/add-role', roleController.addRole);
router.put('/edit-role/:id', roleController.editRoleById);
router.delete('/delete-role/:id', roleController.deleteRoleById);

//gender Controller
router.get('/get-genders', genderController.getGenders);
router.get('/get-gender/:id', genderController.getGenderById);
router.post('/add-gender', genderController.addGender);
router.put('/edit-gender/:id', genderController.editGenderById);
router.delete('/delete-gender/:id', genderController.deleteGenderById);

//Health Data Controller
router.get('/get-health-data-by-pam/:id', healthDataController.getHealthDataByPamId);
router.post('/add-health-data', healthDataController.addHealthData);
router.put('/edit-health-data/:id', healthDataController.editHealthDataById);
router.delete('/delete-health-data/:id', healthDataController.deleteHealthDataById);

//pam group Controller
router.get('/get-pam-groups', pamGroupController.getPamGroups);
router.get('/get-pam-group/:id', pamGroupController.getPamGroupById);
router.post('/add-pam-group', pamGroupController.addPamGroup);
router.put('/edit-pam-group/:id', pamGroupController.editPamGroupById);
router.delete('/delete-pam-group/:id', pamGroupController.deletePamGroupById);

//pam test Controller
router.get('/get-pam-test/:id', pamTestController.getPamTestById);
router.get('/get-pam-test-by-pam/:id', pamTestController.getPamTestByPamId);
router.post('/add-pam-test', pamTestController.addPamTest);
router.put('/edit-pam-test/:id', pamTestController.editPamTestById);
router.delete('/delete-pam-test/:id', pamTestController.deletePamTestById);

//pam test result Controller
router.get('/get-pam-test-result/:id', pamTestResultController.getPamTestResultById);
router.post('/add-pam-test-result', pamTestResultController.addPamTestResult);
router.put('/edit-pam-test-result/:id', pamTestResultController.editPamTestResultById);
router.delete('/delete-pam-test-result/:id', pamTestResultController.deletePamTestResultById);

//pam test answer Controller
router.get('/get-pam-test-answer/:id', pamTestAnswerController.getPamTestAnswerById);
router.post('/add-pam-test-answer', pamTestAnswerController.addPamTestAnswer);
router.put('/edit-pam-test-answer/:id', pamTestAnswerController.editPamTestAnswerById);
router.delete('/delete-pam-test-answer/:id', pamTestAnswerController.deletePamTestAnswerById);
router.get('/get-pam-test-answer-by-test/:id', pamTestAnswerController.getPamTestAnswerByTestId);

//answer Controller
router.get('/get-answer/:id', answerController.getAnswerById);
router.get('/get-answer-by-question/:id', answerController.getAnswerByQuestionId);
router.post('/add-answer', answerController.addAnswer);
router.put('/edit-answer/:id', answerController.editAnswerById);
router.delete('/delete-answer/:id', answerController.deleteAnswerById);

//group type Controller
router.get('/get-group-types', groupTypeController.getGroupTypes);
router.get('/get-group-type/:id', groupTypeController.getGroupTypeById);
router.get('/get-group-type-by-parent/:id', groupTypeController.getGroupTypesByParentId);
router.post('/add-group-type', groupTypeController.addGroupType);
router.put('/edit-group-type/:id', groupTypeController.editGroupTypeById);
router.delete('/delete-group-type/:id', groupTypeController.deleteGroupTypeById);

//dimension Controller
router.get('/get-dimensions', dimensionController.getDimensions);
router.get('/get-dimension/:id', dimensionController.getDimensionById);
router.post('/add-dimension', dimensionController.addDimension);
router.put('/edit-dimension/:id', dimensionController.editDimensionById);
router.delete('/delete-dimension/:id', dimensionController.deleteDimensionById);

//instruction Controller
router.get('/get-instructions', instructionController.getInstructions);
router.get('/get-instruction/:id', instructionController.getInstructionById);
router.post('/add-instruction', instructionController.addInstruction);
router.put('/edit-instruction/:id', instructionController.editInstructionById);
router.delete('/delete-instruction/:id', instructionController.deleteInstructionById);

// recoommendation Controller
router.get('/get-recommendations', recommendationController.getRecommendations);
router.get('/get-recommendation/:id', recommendationController.getRecommendationById);
router.get('/get-recommendation-by-test-result/:id', recommendationController.getRecommendationByTestResult);
router.post('/add-recommendation', recommendationController.addRecommendation);
router.put('/edit-recommendation/:id', recommendationController.editRecommendationById);
router.delete('/delete-recommendation/:id', recommendationController.deleteRecommendationById);

//question Controller
router.get('/get-questions', questionController.getQuestions);
router.get('/get-question/:id', questionController.getQuestionById);
router.get('/get-questions-by-test/:id', questionController.getQuestionsByTestId);
router.post('/add-question', questionController.addQuestion);
router.put('/edit-question/:id', questionController.editQuestionById);
router.delete('/delete-question/:id', questionController.deleteQuestionById);

//test Controller
router.get('/get-tests', testController.getTests);
router.get('/get-test/:id', testController.getTestById);
router.get('/get-tests-by-dimension/:id', testController.getTestsByDimensionId);
router.post('/add-test', testController.addTest);
router.put('/edit-test/:id', testController.editTestById);
router.delete('/delete-test/:id', testController.deleteTestById);

// test weight Controller
router.get('/get-test-weight/:id', testWeightController.getTestWeightById);
router.post('/add-test-weight', testWeightController.addTestWeight);
router.put('/edit-test-weight/:id', testWeightController.editTestWeightById);
router.delete('/delete-test-weight/:id', testWeightController.deleteTestWeightById);


module.exports = router;
