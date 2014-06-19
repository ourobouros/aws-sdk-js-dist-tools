AWS.Service.defineServiceApi(AWS.OpsWorks, "2013-02-18", {"metadata":{"apiVersion":"2013-02-18","endpointPrefix":"opsworks","jsonVersion":"1.1","serviceFullName":"AWS OpsWorks","signatureVersion":"v4","targetPrefix":"OpsWorks_20130218","protocol":"json"},"operations":{"AssignVolume":{"input":{"type":"structure","required":["VolumeId"],"members":{"VolumeId":{},"InstanceId":{}}}},"AssociateElasticIp":{"input":{"type":"structure","required":["ElasticIp"],"members":{"ElasticIp":{},"InstanceId":{}}}},"AttachElasticLoadBalancer":{"input":{"type":"structure","required":["ElasticLoadBalancerName","LayerId"],"members":{"ElasticLoadBalancerName":{},"LayerId":{}}}},"CloneStack":{"input":{"type":"structure","required":["SourceStackId","ServiceRoleArn"],"members":{"SourceStackId":{},"Name":{},"Region":{},"VpcId":{},"Attributes":{"shape":"S6"},"ServiceRoleArn":{},"DefaultInstanceProfileArn":{},"DefaultOs":{},"HostnameTheme":{},"DefaultAvailabilityZone":{},"DefaultSubnetId":{},"CustomJson":{},"ConfigurationManager":{"shape":"S8"},"ChefConfiguration":{"shape":"S9"},"UseCustomCookbooks":{"shape":"Sa"},"UseOpsworksSecurityGroups":{"shape":"Sa"},"CustomCookbooksSource":{"shape":"Sb"},"DefaultSshKeyName":{},"ClonePermissions":{"shape":"Sa"},"CloneAppIds":{"shape":"Sd"},"DefaultRootDeviceType":{}}},"output":{"type":"structure","members":{"StackId":{}}}},"CreateApp":{"input":{"type":"structure","required":["StackId","Name","Type"],"members":{"StackId":{},"Shortname":{},"Name":{},"Description":{},"DataSources":{"shape":"Sh"},"Type":{},"AppSource":{"shape":"Sb"},"Domains":{"shape":"Sd"},"EnableSsl":{"shape":"Sa"},"SslConfiguration":{"shape":"Sk"},"Attributes":{"shape":"Sl"}}},"output":{"type":"structure","members":{"AppId":{}}}},"CreateDeployment":{"input":{"type":"structure","required":["StackId","Command"],"members":{"StackId":{},"AppId":{},"InstanceIds":{"shape":"Sd"},"Command":{"shape":"Sp"},"Comment":{},"CustomJson":{}}},"output":{"type":"structure","members":{"DeploymentId":{}}}},"CreateInstance":{"input":{"type":"structure","required":["StackId","LayerIds","InstanceType"],"members":{"StackId":{},"LayerIds":{"shape":"Sd"},"InstanceType":{},"AutoScalingType":{},"Hostname":{},"Os":{},"AmiId":{},"SshKeyName":{},"AvailabilityZone":{},"VirtualizationType":{},"SubnetId":{},"Architecture":{},"RootDeviceType":{},"InstallUpdatesOnBoot":{"shape":"Sa"},"EbsOptimized":{"shape":"Sa"}}},"output":{"type":"structure","members":{"InstanceId":{}}}},"CreateLayer":{"input":{"type":"structure","required":["StackId","Type","Name","Shortname"],"members":{"StackId":{},"Type":{},"Name":{},"Shortname":{},"Attributes":{"shape":"Sz"},"CustomInstanceProfileArn":{},"CustomSecurityGroupIds":{"shape":"Sd"},"Packages":{"shape":"Sd"},"VolumeConfigurations":{"shape":"S11"},"EnableAutoHealing":{"shape":"Sa"},"AutoAssignElasticIps":{"shape":"Sa"},"AutoAssignPublicIps":{"shape":"Sa"},"CustomRecipes":{"shape":"S14"},"InstallUpdatesOnBoot":{"shape":"Sa"},"UseEbsOptimizedInstances":{"shape":"Sa"}}},"output":{"type":"structure","members":{"LayerId":{}}}},"CreateStack":{"input":{"type":"structure","required":["Name","Region","ServiceRoleArn","DefaultInstanceProfileArn"],"members":{"Name":{},"Region":{},"VpcId":{},"Attributes":{"shape":"S6"},"ServiceRoleArn":{},"DefaultInstanceProfileArn":{},"DefaultOs":{},"HostnameTheme":{},"DefaultAvailabilityZone":{},"DefaultSubnetId":{},"CustomJson":{},"ConfigurationManager":{"shape":"S8"},"ChefConfiguration":{"shape":"S9"},"UseCustomCookbooks":{"shape":"Sa"},"UseOpsworksSecurityGroups":{"shape":"Sa"},"CustomCookbooksSource":{"shape":"Sb"},"DefaultSshKeyName":{},"DefaultRootDeviceType":{}}},"output":{"type":"structure","members":{"StackId":{}}}},"CreateUserProfile":{"input":{"type":"structure","required":["IamUserArn"],"members":{"IamUserArn":{},"SshUsername":{},"SshPublicKey":{},"AllowSelfManagement":{"shape":"Sa"}}},"output":{"type":"structure","members":{"IamUserArn":{}}}},"DeleteApp":{"input":{"type":"structure","required":["AppId"],"members":{"AppId":{}}}},"DeleteInstance":{"input":{"type":"structure","required":["InstanceId"],"members":{"InstanceId":{},"DeleteElasticIp":{"shape":"Sa"},"DeleteVolumes":{"shape":"Sa"}}}},"DeleteLayer":{"input":{"type":"structure","required":["LayerId"],"members":{"LayerId":{}}}},"DeleteStack":{"input":{"type":"structure","required":["StackId"],"members":{"StackId":{}}}},"DeleteUserProfile":{"input":{"type":"structure","required":["IamUserArn"],"members":{"IamUserArn":{}}}},"DeregisterElasticIp":{"input":{"type":"structure","required":["ElasticIp"],"members":{"ElasticIp":{}}}},"DeregisterRdsDbInstance":{"input":{"type":"structure","required":["RdsDbInstanceArn"],"members":{"RdsDbInstanceArn":{}}}},"DeregisterVolume":{"input":{"type":"structure","required":["VolumeId"],"members":{"VolumeId":{}}}},"DescribeApps":{"input":{"type":"structure","members":{"StackId":{},"AppIds":{"shape":"Sd"}}},"output":{"type":"structure","members":{"Apps":{"type":"list","member":{"type":"structure","members":{"AppId":{},"StackId":{},"Shortname":{},"Name":{},"Description":{},"DataSources":{"shape":"Sh"},"Type":{},"AppSource":{"shape":"Sb"},"Domains":{"shape":"Sd"},"EnableSsl":{"shape":"Sa"},"SslConfiguration":{"shape":"Sk"},"Attributes":{"shape":"Sl"},"CreatedAt":{}}}}}}},"DescribeCommands":{"input":{"type":"structure","members":{"DeploymentId":{},"InstanceId":{},"CommandIds":{"shape":"Sd"}}},"output":{"type":"structure","members":{"Commands":{"type":"list","member":{"type":"structure","members":{"CommandId":{},"InstanceId":{},"DeploymentId":{},"CreatedAt":{},"AcknowledgedAt":{},"CompletedAt":{},"Status":{},"ExitCode":{"shape":"S13"},"LogUrl":{},"Type":{}}}}}}},"DescribeDeployments":{"input":{"type":"structure","members":{"StackId":{},"AppId":{},"DeploymentIds":{"shape":"Sd"}}},"output":{"type":"structure","members":{"Deployments":{"type":"list","member":{"type":"structure","members":{"DeploymentId":{},"StackId":{},"AppId":{},"CreatedAt":{},"CompletedAt":{},"Duration":{"shape":"S13"},"IamUserArn":{},"Comment":{},"Command":{"shape":"Sp"},"Status":{},"CustomJson":{},"InstanceIds":{"shape":"Sd"}}}}}}},"DescribeElasticIps":{"input":{"type":"structure","members":{"InstanceId":{},"StackId":{},"Ips":{"shape":"Sd"}}},"output":{"type":"structure","members":{"ElasticIps":{"type":"list","member":{"type":"structure","members":{"Ip":{},"Name":{},"Domain":{},"Region":{},"InstanceId":{}}}}}}},"DescribeElasticLoadBalancers":{"input":{"type":"structure","members":{"StackId":{},"LayerIds":{"shape":"Sd"}}},"output":{"type":"structure","members":{"ElasticLoadBalancers":{"type":"list","member":{"type":"structure","members":{"ElasticLoadBalancerName":{},"Region":{},"DnsName":{},"StackId":{},"LayerId":{},"VpcId":{},"AvailabilityZones":{"shape":"Sd"},"SubnetIds":{"shape":"Sd"},"Ec2InstanceIds":{"shape":"Sd"}}}}}}},"DescribeInstances":{"input":{"type":"structure","members":{"StackId":{},"LayerId":{},"InstanceIds":{"shape":"Sd"}}},"output":{"type":"structure","members":{"Instances":{"type":"list","member":{"type":"structure","members":{"InstanceId":{},"Ec2InstanceId":{},"VirtualizationType":{},"Hostname":{},"StackId":{},"LayerIds":{"shape":"Sd"},"SecurityGroupIds":{"shape":"Sd"},"InstanceType":{},"InstanceProfileArn":{},"Status":{},"Os":{},"AmiId":{},"AvailabilityZone":{},"SubnetId":{},"PublicDns":{},"PrivateDns":{},"PublicIp":{},"PrivateIp":{},"ElasticIp":{},"AutoScalingType":{},"SshKeyName":{},"SshHostRsaKeyFingerprint":{},"SshHostDsaKeyFingerprint":{},"CreatedAt":{},"LastServiceErrorId":{},"Architecture":{},"RootDeviceType":{},"RootDeviceVolumeId":{},"InstallUpdatesOnBoot":{"shape":"Sa"},"EbsOptimized":{"shape":"Sa"}}}}}}},"DescribeLayers":{"input":{"type":"structure","members":{"StackId":{},"LayerIds":{"shape":"Sd"}}},"output":{"type":"structure","members":{"Layers":{"type":"list","member":{"type":"structure","members":{"StackId":{},"LayerId":{},"Type":{},"Name":{},"Shortname":{},"Attributes":{"shape":"Sz"},"CustomInstanceProfileArn":{},"CustomSecurityGroupIds":{"shape":"Sd"},"DefaultSecurityGroupNames":{"shape":"Sd"},"Packages":{"shape":"Sd"},"VolumeConfigurations":{"shape":"S11"},"EnableAutoHealing":{"shape":"Sa"},"AutoAssignElasticIps":{"shape":"Sa"},"AutoAssignPublicIps":{"shape":"Sa"},"DefaultRecipes":{"shape":"S14"},"CustomRecipes":{"shape":"S14"},"CreatedAt":{},"InstallUpdatesOnBoot":{"shape":"Sa"},"UseEbsOptimizedInstances":{"shape":"Sa"}}}}}}},"DescribeLoadBasedAutoScaling":{"input":{"type":"structure","required":["LayerIds"],"members":{"LayerIds":{"shape":"Sd"}}},"output":{"type":"structure","members":{"LoadBasedAutoScalingConfigurations":{"type":"list","member":{"type":"structure","members":{"LayerId":{},"Enable":{"shape":"Sa"},"UpScaling":{"shape":"S2f"},"DownScaling":{"shape":"S2f"}}}}}}},"DescribeMyUserProfile":{"output":{"type":"structure","members":{"UserProfile":{"type":"structure","members":{"IamUserArn":{},"Name":{},"SshUsername":{},"SshPublicKey":{}}}}}},"DescribePermissions":{"input":{"type":"structure","members":{"IamUserArn":{},"StackId":{}}},"output":{"type":"structure","members":{"Permissions":{"type":"list","member":{"type":"structure","members":{"StackId":{},"IamUserArn":{},"AllowSsh":{"shape":"Sa"},"AllowSudo":{"shape":"Sa"},"Level":{}}}}}}},"DescribeRaidArrays":{"input":{"type":"structure","members":{"InstanceId":{},"RaidArrayIds":{"shape":"Sd"}}},"output":{"type":"structure","members":{"RaidArrays":{"type":"list","member":{"type":"structure","members":{"RaidArrayId":{},"InstanceId":{},"Name":{},"RaidLevel":{"shape":"S13"},"NumberOfDisks":{"shape":"S13"},"Size":{"shape":"S13"},"Device":{},"MountPoint":{},"AvailabilityZone":{},"CreatedAt":{},"VolumeType":{},"Iops":{"shape":"S13"}}}}}}},"DescribeRdsDbInstances":{"input":{"type":"structure","required":["StackId"],"members":{"StackId":{},"RdsDbInstanceArns":{"shape":"Sd"}}},"output":{"type":"structure","members":{"RdsDbInstances":{"type":"list","member":{"type":"structure","members":{"RdsDbInstanceArn":{},"DbInstanceIdentifier":{},"DbUser":{},"DbPassword":{},"Region":{},"Address":{},"Engine":{},"StackId":{},"MissingOnRds":{"shape":"Sa"}}}}}}},"DescribeServiceErrors":{"input":{"type":"structure","members":{"StackId":{},"InstanceId":{},"ServiceErrorIds":{"shape":"Sd"}}},"output":{"type":"structure","members":{"ServiceErrors":{"type":"list","member":{"type":"structure","members":{"ServiceErrorId":{},"StackId":{},"InstanceId":{},"Type":{},"Message":{},"CreatedAt":{}}}}}}},"DescribeStackSummary":{"input":{"type":"structure","required":["StackId"],"members":{"StackId":{}}},"output":{"type":"structure","members":{"StackSummary":{"type":"structure","members":{"StackId":{},"Name":{},"Arn":{},"LayersCount":{"shape":"S13"},"AppsCount":{"shape":"S13"},"InstancesCount":{"type":"structure","members":{"Booting":{"shape":"S13"},"ConnectionLost":{"shape":"S13"},"Online":{"shape":"S13"},"Pending":{"shape":"S13"},"Rebooting":{"shape":"S13"},"Requested":{"shape":"S13"},"RunningSetup":{"shape":"S13"},"SetupFailed":{"shape":"S13"},"ShuttingDown":{"shape":"S13"},"StartFailed":{"shape":"S13"},"Stopped":{"shape":"S13"},"Stopping":{"shape":"S13"},"Terminated":{"shape":"S13"},"Terminating":{"shape":"S13"}}}}}}}},"DescribeStacks":{"input":{"type":"structure","members":{"StackIds":{"shape":"Sd"}}},"output":{"type":"structure","members":{"Stacks":{"type":"list","member":{"type":"structure","members":{"StackId":{},"Name":{},"Arn":{},"Region":{},"VpcId":{},"Attributes":{"shape":"S6"},"ServiceRoleArn":{},"DefaultInstanceProfileArn":{},"DefaultOs":{},"HostnameTheme":{},"DefaultAvailabilityZone":{},"DefaultSubnetId":{},"CustomJson":{},"ConfigurationManager":{"shape":"S8"},"ChefConfiguration":{"shape":"S9"},"UseCustomCookbooks":{"shape":"Sa"},"UseOpsworksSecurityGroups":{"shape":"Sa"},"CustomCookbooksSource":{"shape":"Sb"},"DefaultSshKeyName":{},"CreatedAt":{},"DefaultRootDeviceType":{}}}}}}},"DescribeTimeBasedAutoScaling":{"input":{"type":"structure","required":["InstanceIds"],"members":{"InstanceIds":{"shape":"Sd"}}},"output":{"type":"structure","members":{"TimeBasedAutoScalingConfigurations":{"type":"list","member":{"type":"structure","members":{"InstanceId":{},"AutoScalingSchedule":{"shape":"S3c"}}}}}}},"DescribeUserProfiles":{"input":{"type":"structure","members":{"IamUserArns":{"shape":"Sd"}}},"output":{"type":"structure","members":{"UserProfiles":{"type":"list","member":{"type":"structure","members":{"IamUserArn":{},"Name":{},"SshUsername":{},"SshPublicKey":{},"AllowSelfManagement":{"shape":"Sa"}}}}}}},"DescribeVolumes":{"input":{"type":"structure","members":{"InstanceId":{},"StackId":{},"RaidArrayId":{},"VolumeIds":{"shape":"Sd"}}},"output":{"type":"structure","members":{"Volumes":{"type":"list","member":{"type":"structure","members":{"VolumeId":{},"Ec2VolumeId":{},"Name":{},"RaidArrayId":{},"InstanceId":{},"Status":{},"Size":{"shape":"S13"},"Device":{},"MountPoint":{},"Region":{},"AvailabilityZone":{},"VolumeType":{},"Iops":{"shape":"S13"}}}}}}},"DetachElasticLoadBalancer":{"input":{"type":"structure","required":["ElasticLoadBalancerName","LayerId"],"members":{"ElasticLoadBalancerName":{},"LayerId":{}}}},"DisassociateElasticIp":{"input":{"type":"structure","required":["ElasticIp"],"members":{"ElasticIp":{}}}},"GetHostnameSuggestion":{"input":{"type":"structure","required":["LayerId"],"members":{"LayerId":{}}},"output":{"type":"structure","members":{"LayerId":{},"Hostname":{}}}},"RebootInstance":{"input":{"type":"structure","required":["InstanceId"],"members":{"InstanceId":{}}}},"RegisterElasticIp":{"input":{"type":"structure","required":["ElasticIp","StackId"],"members":{"ElasticIp":{},"StackId":{}}},"output":{"type":"structure","members":{"ElasticIp":{}}}},"RegisterRdsDbInstance":{"input":{"type":"structure","required":["StackId","RdsDbInstanceArn","DbUser","DbPassword"],"members":{"StackId":{},"RdsDbInstanceArn":{},"DbUser":{},"DbPassword":{}}}},"RegisterVolume":{"input":{"type":"structure","required":["StackId"],"members":{"Ec2VolumeId":{},"StackId":{}}},"output":{"type":"structure","members":{"VolumeId":{}}}},"SetLoadBasedAutoScaling":{"input":{"type":"structure","required":["LayerId"],"members":{"LayerId":{},"Enable":{"shape":"Sa"},"UpScaling":{"shape":"S2f"},"DownScaling":{"shape":"S2f"}}}},"SetPermission":{"input":{"type":"structure","required":["StackId","IamUserArn"],"members":{"StackId":{},"IamUserArn":{},"AllowSsh":{"shape":"Sa"},"AllowSudo":{"shape":"Sa"},"Level":{}}}},"SetTimeBasedAutoScaling":{"input":{"type":"structure","required":["InstanceId"],"members":{"InstanceId":{},"AutoScalingSchedule":{"shape":"S3c"}}}},"StartInstance":{"input":{"type":"structure","required":["InstanceId"],"members":{"InstanceId":{}}}},"StartStack":{"input":{"type":"structure","required":["StackId"],"members":{"StackId":{}}}},"StopInstance":{"input":{"type":"structure","required":["InstanceId"],"members":{"InstanceId":{}}}},"StopStack":{"input":{"type":"structure","required":["StackId"],"members":{"StackId":{}}}},"UnassignVolume":{"input":{"type":"structure","required":["VolumeId"],"members":{"VolumeId":{}}}},"UpdateApp":{"input":{"type":"structure","required":["AppId"],"members":{"AppId":{},"Name":{},"Description":{},"DataSources":{"shape":"Sh"},"Type":{},"AppSource":{"shape":"Sb"},"Domains":{"shape":"Sd"},"EnableSsl":{"shape":"Sa"},"SslConfiguration":{"shape":"Sk"},"Attributes":{"shape":"Sl"}}}},"UpdateElasticIp":{"input":{"type":"structure","required":["ElasticIp"],"members":{"ElasticIp":{},"Name":{}}}},"UpdateInstance":{"input":{"type":"structure","required":["InstanceId"],"members":{"InstanceId":{},"LayerIds":{"shape":"Sd"},"InstanceType":{},"AutoScalingType":{},"Hostname":{},"Os":{},"AmiId":{},"SshKeyName":{},"Architecture":{},"InstallUpdatesOnBoot":{"shape":"Sa"},"EbsOptimized":{"shape":"Sa"}}}},"UpdateLayer":{"input":{"type":"structure","required":["LayerId"],"members":{"LayerId":{},"Name":{},"Shortname":{},"Attributes":{"shape":"Sz"},"CustomInstanceProfileArn":{},"CustomSecurityGroupIds":{"shape":"Sd"},"Packages":{"shape":"Sd"},"VolumeConfigurations":{"shape":"S11"},"EnableAutoHealing":{"shape":"Sa"},"AutoAssignElasticIps":{"shape":"Sa"},"AutoAssignPublicIps":{"shape":"Sa"},"CustomRecipes":{"shape":"S14"},"InstallUpdatesOnBoot":{"shape":"Sa"},"UseEbsOptimizedInstances":{"shape":"Sa"}}}},"UpdateMyUserProfile":{"input":{"type":"structure","members":{"SshPublicKey":{}}}},"UpdateRdsDbInstance":{"input":{"type":"structure","required":["RdsDbInstanceArn"],"members":{"RdsDbInstanceArn":{},"DbUser":{},"DbPassword":{}}}},"UpdateStack":{"input":{"type":"structure","required":["StackId"],"members":{"StackId":{},"Name":{},"Attributes":{"shape":"S6"},"ServiceRoleArn":{},"DefaultInstanceProfileArn":{},"DefaultOs":{},"HostnameTheme":{},"DefaultAvailabilityZone":{},"DefaultSubnetId":{},"CustomJson":{},"ConfigurationManager":{"shape":"S8"},"ChefConfiguration":{"shape":"S9"},"UseCustomCookbooks":{"shape":"Sa"},"CustomCookbooksSource":{"shape":"Sb"},"DefaultSshKeyName":{},"DefaultRootDeviceType":{},"UseOpsworksSecurityGroups":{"shape":"Sa"}}}},"UpdateUserProfile":{"input":{"type":"structure","required":["IamUserArn"],"members":{"IamUserArn":{},"SshUsername":{},"SshPublicKey":{},"AllowSelfManagement":{"shape":"Sa"}}}},"UpdateVolume":{"input":{"type":"structure","required":["VolumeId"],"members":{"VolumeId":{},"Name":{},"MountPoint":{}}}}},"shapes":{"S6":{"type":"map","key":{},"value":{}},"S8":{"type":"structure","members":{"Name":{},"Version":{}}},"S9":{"type":"structure","members":{"ManageBerkshelf":{"shape":"Sa"},"BerkshelfVersion":{}}},"Sa":{"type":"boolean","box":true},"Sb":{"type":"structure","members":{"Type":{},"Url":{},"Username":{},"Password":{},"SshKey":{},"Revision":{}}},"Sd":{"type":"list","member":{}},"Sh":{"type":"list","member":{"type":"structure","members":{"Type":{},"Arn":{},"DatabaseName":{}}}},"Sk":{"type":"structure","required":["Certificate","PrivateKey"],"members":{"Certificate":{},"PrivateKey":{},"Chain":{}}},"Sl":{"type":"map","key":{},"value":{}},"Sp":{"type":"structure","required":["Name"],"members":{"Name":{},"Args":{"type":"map","key":{},"value":{"shape":"Sd"}}}},"Sz":{"type":"map","key":{},"value":{}},"S11":{"type":"list","member":{"type":"structure","required":["MountPoint","NumberOfDisks","Size"],"members":{"MountPoint":{},"RaidLevel":{"shape":"S13"},"NumberOfDisks":{"shape":"S13"},"Size":{"shape":"S13"},"VolumeType":{},"Iops":{"shape":"S13"}}}},"S13":{"type":"integer","box":true},"S14":{"type":"structure","members":{"Setup":{"shape":"Sd"},"Configure":{"shape":"Sd"},"Deploy":{"shape":"Sd"},"Undeploy":{"shape":"Sd"},"Shutdown":{"shape":"Sd"}}},"S2f":{"type":"structure","members":{"InstanceCount":{"shape":"S13"},"ThresholdsWaitTime":{"type":"integer"},"IgnoreMetricsTime":{"type":"integer"},"CpuThreshold":{"shape":"S2h"},"MemoryThreshold":{"shape":"S2h"},"LoadThreshold":{"shape":"S2h"}}},"S2h":{"type":"double","box":true},"S3c":{"type":"structure","members":{"Monday":{"shape":"S3d"},"Tuesday":{"shape":"S3d"},"Wednesday":{"shape":"S3d"},"Thursday":{"shape":"S3d"},"Friday":{"shape":"S3d"},"Saturday":{"shape":"S3d"},"Sunday":{"shape":"S3d"}}},"S3d":{"type":"map","key":{},"value":{}}},"paginators":{"DescribeApps":{"result_key":"Apps"},"DescribeCommands":{"result_key":"Commands"},"DescribeDeployments":{"result_key":"Deployments"},"DescribeElasticIps":{"result_key":"ElasticIps"},"DescribeElasticLoadBalancers":{"result_key":"ElasticLoadBalancers"},"DescribeInstances":{"result_key":"Instances"},"DescribeLayers":{"result_key":"Layers"},"DescribeLoadBasedAutoScaling":{"result_key":"LoadBasedAutoScalingConfigurations"},"DescribePermissions":{"result_key":"Permissions"},"DescribeRaidArrays":{"result_key":"RaidArrays"},"DescribeServiceErrors":{"result_key":"ServiceErrors"},"DescribeStacks":{"result_key":"Stacks"},"DescribeTimeBasedAutoScaling":{"result_key":"TimeBasedAutoScalingConfigurations"},"DescribeUserProfiles":{"result_key":"UserProfiles"},"DescribeVolumes":{"result_key":"Volumes"}}});