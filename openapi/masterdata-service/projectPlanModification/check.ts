import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/项目计划变更相关/checkUsingGET_2
*/
export default function fetchMethod(options: { params: { projectId?: string } }, extraOptions?: any) {
    return http<IJSONResultIndicatesTheResultOfVerifyingProjectChangeInformation>(
        {
            url: "/masterdata-service/projectPlanModification/check",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«项目变更信息校验结果» */
export interface IJSONResultIndicatesTheResultOfVerifyingProjectChangeInformation {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProjectChangeInformationVerificationResult;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 项目变更信息校验结果 */
export interface IProjectChangeInformationVerificationResult {
    /** 项目名称 */
    projectName?: string;
    /** 变更单单号 */
    modificationCode?: string;
    /** 变更单id */
    modificationId?: string;
}
