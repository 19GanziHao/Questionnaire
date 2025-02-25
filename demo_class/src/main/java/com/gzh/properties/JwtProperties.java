package com.gzh.properties;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties(prefix = "questionnaire.jwt")
@Data
public class JwtProperties {

  /**
   * 管理端用户生成jwt令牌相关配置
   */
  private String userSecretKey;
  private long userTtl;
  private String userTokenName;

}
