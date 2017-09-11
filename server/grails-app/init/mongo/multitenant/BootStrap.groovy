package mongo.multitenant

import com.mongodb.MongoClient
import grails.gorm.multitenancy.CurrentTenant
import grails.gorm.multitenancy.Tenants
import org.grails.datastore.mapping.mongo.MongoDatastore
import org.grails.datastore.mapping.multitenancy.web.SubDomainTenantResolver
import org.springframework.beans.factory.annotation.Autowired

class BootStrap {
    @Autowired MongoDatastore mongoDatastore

    def init = { servletContext ->
        def configuration = [url:"mongodb://localhost/development"]
        def mongoClient =
                mongoDatastore.connectionSources
                        .addConnectionSource("development", configuration)
//        println "------>"+ mongoDatastore.getDatastoreForTenantId('development')
//        println CurrentTenant.get()


    }
    def destroy = {

    }
}
