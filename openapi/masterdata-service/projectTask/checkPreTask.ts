import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:16700/doc.html#/default/项目任务相关/checkPreTaskUsingGET
*/
export default function fetchMethod(options: { params: { Id?: string } }, extraOptions?: any) {
    return http<IJSONResultListProjectTaskPreTaskVerifyTheResponseObject>(
        {
            url: "/masterdata-service/projectTask/checkPreTask",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«项目任务前置任务校验响应对象»» */
export interface IJSONResultListProjectTaskPreTaskVerifyTheResponseObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IItemTaskPreTaskVerifiesTheResponseObject[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 项目任务前置任务校验响应对象 */
export interface IItemTaskPreTaskVerifiesTheResponseObject {
    /** 任务编号 */
    code?: string;
    /** 任务id */
    id?: string;
    /** 任务名称 */
    name?: string;
}
