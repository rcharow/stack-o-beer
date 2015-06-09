var supertest = require('supertest')
var app = require('../../../server/app')
var agent = supertest.agent(app)

// var db = 'mongodb://localhost:27017/beer-stack'
// var clearDb = require('mocha-mongoose')(db)

var sinon = require('sinon');
var expect = require('chai').expect;
var mongoose = require('mongoose');


describe('Beer Route',function(){
	beforeEach('Establish a DB connection',function (done){
		if(mongoose.connection.db) return done()
		mongoose.connect(db,done)
	})

	describe('GET all categories', function(){
		it('should return all beer categories',function (done){
			agent
			.get('/api/beer/55760354bc48bd122edf3282')
			.expect(200)
			.end(function (err,res){
				if(err) return done(err)
				console.log("TEST RES",res.body)
				expect(res.body).to.be.instanceof(Array)
				done()
			})
		})
	})
})