import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.139.107:16700/doc.html#/default/项目关闭相关/getAppInfoUsingGET
*/
export default function fetchMethod(options: { params: { projectId?: string } }, extraOptions?: any) {
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
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ITheProjectClosesApplyingTheResponseObject;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 项目关闭应用响应对象 */
export interface ITheProjectClosesApplyingTheResponseObject {
    /** 应用id */
    appId?: string;
    /** 应用code */
    appCode?: string;
    /** 项目关闭id */
    id?: string;
    /** 项目计划编号 */
    code?: string;
    /** 任务流程状态 */
    flowStatus?: string;
    /** 数据状态 */
    dataStatus?: ETheProjectClosesApplyingTheResponseObject_dataStatus;
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
