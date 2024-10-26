package com.air.AIR.configuration;

import javax.sql.DataSource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

@Configuration
@PropertySource("classpath:/application.properties")
public class DBConfiguration {
    
    @Autowired
    private ApplicationContext applicationContext;

    // 기본 DriverManagerDataSource를 사용하여 DataSource 빈을 생성합니다.
    @Bean
    @ConfigurationProperties(prefix = "spring.datasource")
    public DataSource dataSource() {
    	DriverManagerDataSource dataSource = new DriverManagerDataSource();
        dataSource.setDriverClassName("com.mysql.cj.jdbc.Driver");
        dataSource.setUrl("jdbc:mysql://localhost:3306/AIR");
        dataSource.setUsername("root");
        return dataSource;
    }
    
    // SqlSessionFactory 빈을 생성합니다. MyBatis 설정과 매퍼 XML 파일 위치를 지정합니다.
    @Bean
    public SqlSessionFactory sqlSessionFactory() throws Exception {
        SqlSessionFactoryBean factoryBean = new SqlSessionFactoryBean();
        factoryBean.setDataSource(dataSource());
        factoryBean.setMapperLocations(applicationContext.getResources("classpath:/mapper/**/*Mapper.xml"));
        factoryBean.setTypeAliasesPackage("com.air.AIR.domain"); // 도메인 객체 패키지 지정
        factoryBean.setConfiguration(mybatisConfiguration());
        return factoryBean.getObject();
    }
    
    // SqlSessionTemplate 빈을 생성합니다. SqlSessionFactory를 사용하여 MyBatis 세션을 관리합니다.
    @Bean
    public SqlSessionTemplate sqlSession() throws Exception {
        return new SqlSessionTemplate(sqlSessionFactory());
    }

    // MyBatis의 설정을 정의합니다. MyBatis의 XML 설정 파일을 사용하여 구성을 맞춤화합니다.
    @Bean
    @ConfigurationProperties(prefix = "mybatis.configuration")
    public org.apache.ibatis.session.Configuration mybatisConfiguration() {
        return new org.apache.ibatis.session.Configuration();
    }
}