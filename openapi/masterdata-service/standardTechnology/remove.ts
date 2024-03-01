import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:16700/doc.html#/default/标准工艺相关/removeUsingPOST_1
*/
export default function fetchMethod(options: { data: IStandardProcessModificationClassificationRequestObject1 }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/standardTechnology/remove",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 标准工艺修改分类请求对象_1 */
export interface IStandardProcessModificationClassificationRequestObject1 {
    /** 是否删除全部 */
    removeAll?: EStandardProcessModificationClassificationRequestObject1_removeAll;
    /** 标准工艺ids */
    standardTechnologyIds?: string[];
}
/** JSONResult«object» */
export interface IJSONResultObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EStandardProcessModificationClassificationRequestObject1_removeAll {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
