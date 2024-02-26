import { http } from '@/api/http';

/**
* @link http://47.108.139.107:18100/doc.html#/default/试用模块相关/listAllUsingGET_1
*/
export default function fetchMethod(extraOptions?: any) {
    return http<IJSONResultListTheTrialModuleRespondsToTheDTO>(
        {
            url: "/plk-uaa-service/trialModule/listAll",
            method: "get",
        },
        extraOptions,
    );
}
/** JSONResult«List«试用模块响应DTO»» */
export interface IJSONResultListTheTrialModuleRespondsToTheDTO {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: ITrialModuleRespondsToDTO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
/** 试用模块响应DTO */
export interface ITrialModuleRespondsToDTO {
    /** 试用模块id */
    id: number;
    /** 试用模块名称 */
    name: string;
    /** pc端的图标 */
    pcIcon: string;
    /** 移动端的图标 */
    appIcon: string;
}
