import { makeRegex } from './utils';

const defaultConfig = {

  activeViewClass: 'hr-active-view',

  defaultRoute: '',

  viewSelector: 'hr-view'

};

const defaultRouteConfig = {

  contentUrl: '',

  hash: '',

  onContentLoad: () => {},

  onNavigate: () => {},

  resources: {

    scripts: [],

    styles: []

  },

  viewId: ''

};

const applyRouteHash = routeConfig => Object.assign(

  {},

  routeConfig,

  {

    hash: makeRegex(routeConfig.hash)

  }

);

const extendRouteConfig = routeConfig => Object.assign(

  {},

  defaultRouteConfig,

  routeConfig, {

    resources: Object.assign(

      {},

      defaultRouteConfig.resources,

      routeConfig.resources

    )

  }

);

export const parseConfig = config => Object.assign(

  {},

  defaultConfig,

  config,

  {
    routes: config.routes
      .map(extendRouteConfig)
      .map(applyRouteHash)
  }

);
