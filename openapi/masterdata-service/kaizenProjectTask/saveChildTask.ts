import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/kaizen项目任务相关/saveChildTaskUsingPOST
*/
export default function fetchMethod(options: { data: IMasterDataBaseEditDTO1 }, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/masterdata-service/kaizenProjectTask/saveChildTask",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 主数据基础编辑 DTO_1 */
export interface IMasterDataBaseEditDTO1 {
    /** 编辑数据 */
    data?: Record<string, Record<string, any>>;
    /** 流程任务id - 新增/重新编辑业务，要设置为null */
    flowPathTaskId?: string;
    /** 扩展参数 */
    extensionParam?: Record<string, Record<string, any>>;
    /** 上级任务ID */
    parentId?: string;
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
