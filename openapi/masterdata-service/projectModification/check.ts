import { http } from "@/api/http";

/**
* @author TanPeng
* @link http://47.108.135.148:16700/doc.html#/default/项目变更相关/checkUsingGET_1
*/
export default function fetchMethod(options: { params: { projectId?: string } }, extraOptions?: any) {
    return http<IJSONResultIndicatesTheResultOfVerifyingProjectChangeInformation>(
        {
            url: "/masterdata-service/projectModification/check",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«项目变更信息校验结果» */
export interface IJSONResultIndicatesTheResultOfVerifyingProjectChangeInformation {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IProjectChangeInformationVerificationResult;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 项目变更信息校验结果 */
export interface IProjectChangeInformationVerificationResult {
    /** 变更单单号 */
    modificationCode?: string;
    /** 变更单id */
    modificationId?: string;
    /** 项目名称 */
    projectName?: string;
}
