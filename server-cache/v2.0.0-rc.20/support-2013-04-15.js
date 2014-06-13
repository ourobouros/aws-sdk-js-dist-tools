AWS.Service.defineServiceApi(AWS.Support, "2013-04-15", {"metadata":{"apiVersion":"2013-04-15","endpointPrefix":"support","jsonVersion":"1.1","serviceFullName":"AWS Support","signatureVersion":"v4","targetPrefix":"AWSSupport_20130415","protocol":"json"},"operations":{"AddCommunicationToCase":{"input":{"type":"structure","required":["communicationBody"],"members":{"caseId":{},"communicationBody":{},"ccEmailAddresses":{"shape":"S4"}}},"output":{"type":"structure","members":{"result":{"type":"boolean"}}}},"CreateCase":{"input":{"type":"structure","required":["subject","communicationBody"],"members":{"subject":{},"serviceCode":{},"severityCode":{},"categoryCode":{},"communicationBody":{},"ccEmailAddresses":{"shape":"S4"},"language":{},"issueType":{}}},"output":{"type":"structure","members":{"caseId":{}}}},"DescribeCases":{"input":{"type":"structure","members":{"caseIdList":{"type":"list","member":{}},"displayId":{},"afterTime":{},"beforeTime":{},"includeResolvedCases":{"type":"boolean"},"nextToken":{},"maxResults":{"type":"integer"},"language":{}}},"output":{"type":"structure","members":{"cases":{"type":"list","member":{"type":"structure","members":{"caseId":{},"displayId":{},"subject":{},"status":{},"serviceCode":{},"categoryCode":{},"severityCode":{},"submittedBy":{},"timeCreated":{},"recentCommunications":{"type":"structure","members":{"communications":{"shape":"Sv"},"nextToken":{}}},"ccEmailAddresses":{"shape":"S4"},"language":{}}}},"nextToken":{}}}},"DescribeCommunications":{"input":{"type":"structure","required":["caseId"],"members":{"caseId":{},"beforeTime":{},"afterTime":{},"nextToken":{},"maxResults":{"type":"integer"}}},"output":{"type":"structure","members":{"communications":{"shape":"Sv"},"nextToken":{}}}},"DescribeServices":{"input":{"type":"structure","members":{"serviceCodeList":{"type":"list","member":{}},"language":{}}},"output":{"type":"structure","members":{"services":{"type":"list","member":{"type":"structure","members":{"code":{},"name":{},"categories":{"type":"list","member":{"type":"structure","members":{"code":{},"name":{}}}}}}}}}},"DescribeSeverityLevels":{"input":{"type":"structure","members":{"language":{}}},"output":{"type":"structure","members":{"severityLevels":{"type":"list","member":{"type":"structure","members":{"code":{},"name":{}}}}}}},"DescribeTrustedAdvisorCheckRefreshStatuses":{"input":{"type":"structure","required":["checkIds"],"members":{"checkIds":{"shape":"S1f"}}},"output":{"type":"structure","required":["statuses"],"members":{"statuses":{"type":"list","member":{"shape":"S1j"}}}}},"DescribeTrustedAdvisorCheckResult":{"input":{"type":"structure","required":["checkId"],"members":{"checkId":{},"language":{}}},"output":{"type":"structure","members":{"result":{"type":"structure","required":["checkId","timestamp","status","resourcesSummary","categorySpecificSummary","flaggedResources"],"members":{"checkId":{},"timestamp":{},"status":{},"resourcesSummary":{"shape":"S1o"},"categorySpecificSummary":{"shape":"S1p"},"flaggedResources":{"type":"list","member":{"type":"structure","required":["status","region","resourceId","metadata"],"members":{"status":{},"region":{},"resourceId":{},"isSuppressed":{"type":"boolean"},"metadata":{"shape":"S1f"}}}}}}}}},"DescribeTrustedAdvisorCheckSummaries":{"input":{"type":"structure","required":["checkIds"],"members":{"checkIds":{"shape":"S1f"}}},"output":{"type":"structure","required":["summaries"],"members":{"summaries":{"type":"list","member":{"type":"structure","required":["checkId","timestamp","status","resourcesSummary","categorySpecificSummary"],"members":{"checkId":{},"timestamp":{},"status":{},"hasFlaggedResources":{"type":"boolean"},"resourcesSummary":{"shape":"S1o"},"categorySpecificSummary":{"shape":"S1p"}}}}}}},"DescribeTrustedAdvisorChecks":{"input":{"type":"structure","required":["language"],"members":{"language":{}}},"output":{"type":"structure","required":["checks"],"members":{"checks":{"type":"list","member":{"type":"structure","required":["id","name","description","category","metadata"],"members":{"id":{},"name":{},"description":{},"category":{},"metadata":{"shape":"S1f"}}}}}}},"RefreshTrustedAdvisorCheck":{"input":{"type":"structure","required":["checkId"],"members":{"checkId":{}}},"output":{"type":"structure","required":["status"],"members":{"status":{"shape":"S1j"}}}},"ResolveCase":{"input":{"type":"structure","members":{"caseId":{}}},"output":{"type":"structure","members":{"initialCaseStatus":{},"finalCaseStatus":{}}}}},"shapes":{"S4":{"type":"list","member":{}},"Sv":{"type":"list","member":{"type":"structure","members":{"caseId":{},"body":{},"submittedBy":{},"timeCreated":{}}}},"S1f":{"type":"list","member":{}},"S1j":{"type":"structure","required":["checkId","status","millisUntilNextRefreshable"],"members":{"checkId":{},"status":{},"millisUntilNextRefreshable":{"type":"long"}}},"S1o":{"type":"structure","required":["resourcesProcessed","resourcesFlagged","resourcesIgnored","resourcesSuppressed"],"members":{"resourcesProcessed":{"type":"long"},"resourcesFlagged":{"type":"long"},"resourcesIgnored":{"type":"long"},"resourcesSuppressed":{"type":"long"}}},"S1p":{"type":"structure","members":{"costOptimizing":{"type":"structure","required":["estimatedMonthlySavings","estimatedPercentMonthlySavings"],"members":{"estimatedMonthlySavings":{"type":"double"},"estimatedPercentMonthlySavings":{"type":"double"}}}}}},"paginators":{"DescribeCases":{"input_token":"nextToken","output_token":"nextToken","limit_key":"maxResults","result_key":"cases"},"DescribeCommunications":{"input_token":"nextToken","output_token":"nextToken","limit_key":"maxResults","result_key":"communications"},"DescribeServices":{"result_key":"services"},"DescribeTrustedAdvisorCheckRefreshStatuses":{"result_key":"statuses"},"DescribeTrustedAdvisorCheckSummaries":{"result_key":"summaries"}}});