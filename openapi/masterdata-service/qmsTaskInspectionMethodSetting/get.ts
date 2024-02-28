import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.135.148:16700/doc.html#/default/设置检验任务的检验方式相关/getUsingGET_5
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultSetsTheCheckModeOfTheCheckTaskInResponseToTheDTO>(
        {
            url: "/masterdata-service/qmsTaskInspectionMethodSetting/get",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«设置检验任务检验方式响应DTO» */
export interface IJSONResultSetsTheCheckModeOfTheCheckTaskInResponseToTheDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ISetTheCheckModeResponseDTOForTheCheckTask;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 设置检验任务检验方式响应DTO */
export interface ISetTheCheckModeResponseDTOForTheCheckTask {
    /** 检验方式 */
    taskInspectionMethodType?: ESetTheCheckModeResponseDTOForTheCheckTask_taskInspectionMethodType;
}

export enum ESetTheCheckModeResponseDTOForTheCheckTask_taskInspectionMethodType {
    /** 个检验 */
    SINGLE = "SINGLE",
    /** 批检验 */
    BATCH = "BATCH",
    /** 物料检 */
    MATERIAL = "MATERIAL"
}
