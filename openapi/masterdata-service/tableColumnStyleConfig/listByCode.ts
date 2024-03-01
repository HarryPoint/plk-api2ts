import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/列表列样式配置/listByCodeUsingGET
*/
export default function fetchMethod(options: { params: { code?: string; enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultListListColumnStyleConfigurationVO>(
        {
            url: "/masterdata-service/tableColumnStyleConfig/listByCode",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«列表列样式配置VO»» */
export interface IJSONResultListListColumnStyleConfigurationVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IListColumnStyleConfigurationVO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 列表列样式配置VO */
export interface IListColumnStyleConfigurationVO {
    /** 编码 */
    code?: string;
    /** 列配置JSON */
    config?: Record<string, Record<string, any>>;
    /** id */
    id?: string;
    /** 是否是当前用户选中的 */
    isCurrentUserChoose?: EListColumnStyleConfigurationVO_isCurrentUserChoose;
    /** 名称 */
    name?: string;
    /** 排序 */
    sort?: number;
    /** 类型 */
    type?: EListColumnStyleConfigurationVO_type;
}

export enum EListColumnStyleConfigurationVO_isCurrentUserChoose {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EListColumnStyleConfigurationVO_type {
    /** 系统 */
    SYSTEM = "SYSTEM",
    /** 个人 */
    PERSON = "PERSON"
}
