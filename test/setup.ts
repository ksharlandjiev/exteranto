/// <reference types="node" />
/// <reference types="chai" />
/// <reference types="mocha" />
/// <reference types="chai-as-promised" />

import * as chrome from 'sinon-chrome'
import * as browser from 'sinon-chrome/extensions'

(global as any).chrome = chrome;
(global as any).browser = browser;

import * as chai from "chai"
import * as chaiAsPromised from "chai-as-promised"
chai.use(chaiAsPromised)

require('jsdom-global')()
require('vue').config.productionTip = false

// Bootstraping exteranto.
import { Script } from '@exteranto/support'
import { App } from '@exteranto/core'
import config from '../config'

/**
 * Boot the script.
 */
new App(Script.BACKGROUND, config, {}).bootstrap();
