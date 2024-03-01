import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:16700/doc.html#/default/项目阶段相关/getAppInfoUsingGET_2
*/
export default function fetchMethod(options: { params: { ProjectId?: string } }, extraOptions?: any) {
    return http<IJSONResultProjectPhaseAppliesTheResponseObject>(
        {
            url: "/masterdata-service/projectStage/getAppInfo",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«项目阶段应用响应对象» */
export interface IJSONResultProjectPhaseAppliesTheResponseObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: ITheProjectPhaseAppliesTheResponseObject;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 项目阶段应用响应对象 */
export interface ITheProjectPhaseAppliesTheResponseObject {
    /** 应用code */
    appCode?: string;
    /** 应用id */
    appId?: string;
}
