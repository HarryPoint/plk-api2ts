import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.135.148:16700/doc.html#/default/项目关闭相关/getAppInfoUsingGET
*/
export default function fetchMethod(options: { params: { ProjectId?: string } }, extraOptions?: any) {
    return http<ITheJSONResultProjectClosesTheApplicationResponseObject>(
        {
            url: "/masterdata-service/projectClose/getAppInfo",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«项目关闭应用响应对象» */
export interface ITheJSONResultProjectClosesTheApplicationResponseObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: ITheProjectClosesApplyingTheResponseObject;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 项目关闭应用响应对象 */
export interface ITheProjectClosesApplyingTheResponseObject {
    /** 应用code */
    appCode?: string;
    /** 应用id */
    appId?: string;
    /** 项目计划编号 */
    code?: string;
    /** 数据状态 */
    dataStatus?: ETheProjectClosesApplyingTheResponseObject_dataStatus;
    /** 任务流程状态 */
    flowStatus?: string;
    /** 项目关闭id */
    id?: string;
}

export enum ETheProjectClosesApplyingTheResponseObject_dataStatus {
    /** 停用 */
    INVALID = "INVALID",
    /** 启用 */
    VALID = "VALID",
    /** 暂存 */
    STAGING = "STAGING",
    /** 已删除 */
    DELETED = "DELETED"
}
