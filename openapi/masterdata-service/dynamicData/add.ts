import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/动态数据相关/addUsingPOST
*/
export default function fetchMethod(options: { data: IMasterDataBaseEditDTO, params: { flowPathId?: string } }, extraOptions?: any) {
    return http<IJSONResultDynamicFormSaveResultBO>(
        {
            url: "/masterdata-service/dynamicData/add",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 主数据基础编辑 DTO */
export interface IMasterDataBaseEditDTO {
    /** 编辑数据 */
    data?: Record<string, Record<string, any>>;
    /** 扩展参数 */
    extensionParam?: Record<string, Record<string, any>>;
    /** 流程任务id - 新增/重新编辑业务，要设置为null */
    flowPathTaskId?: string;
}
/** JSONResult«DynamicFormSaveResultBO» */
export interface IJSONResultDynamicFormSaveResultBO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IDynamicFormSaveResultBO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** DynamicFormSaveResultBO */
export interface IDynamicFormSaveResultBO {
    /** undefined */
    code?: string;
    /** undefined */
    id?: string;
}
