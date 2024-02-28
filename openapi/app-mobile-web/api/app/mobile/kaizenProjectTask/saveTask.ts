import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.135.148:17400/doc.html#/default/项目任务相关/saveTaskUsingPOST
*/
export default function fetchMethod(options: { data: IMasterDataBaseEditDTO2 }, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/app-mobile-web/api/app/mobile/kaizenProjectTask/saveTask",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 主数据基础编辑 DTO_2 */
export interface IMasterDataBaseEditDTO2 {
    /** 子任务列表 */
    childTaskList?: IJSONObject[];
    /** 编辑数据 */
    data?: Record<string, Record<string, any>>;
    /** 流程任务id - 新增/重新编辑业务，要设置为null */
    flowPathTaskId?: string;
    /** 扩展参数 */
    extensionParam?: Record<string, Record<string, any>>;
}
/** JSONObject */
export interface IJSONObject {
}
/** JSONResult«long» */
export interface IJSONResultlong {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
