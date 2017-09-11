package mongo.multitenant

import grails.gorm.MultiTenant
import grails.rest.Resource


@Resource(uri = '/users', readOnly = false, formats = ['json', 'xml'])
class User implements MultiTenant<mongo.multitenant.User>{
    String name
    String password
    static constraints = {
    }
}
