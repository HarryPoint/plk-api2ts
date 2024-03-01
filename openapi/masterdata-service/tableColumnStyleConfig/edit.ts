import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/列表列样式配置/editUsingPOST_24
*/
export default function fetchMethod(options: { data: IListColumnStyleConfigurationEditDTO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultListColumnStyleConfigurationEditDTO>(
        {
            url: "/masterdata-service/tableColumnStyleConfig/edit",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 列表列样式配置编辑DTO */
export interface IListColumnStyleConfigurationEditDTO {
    /** 编码 */
    code?: string;
    /** 列配置JSON */
    config?: Record<string, Record<string, any>>;
    /** id */
    id?: string;
    /** 名称 */
    name?: string;
    /** 类型 */
    type?: EListColumnStyleConfigurationEditDTO_type;
}
/** JSONResult«列表列样式配置编辑DTO» */
export interface IJSONResultListColumnStyleConfigurationEditDTO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IListColumnStyleConfigurationEditDTO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EListColumnStyleConfigurationEditDTO_type {
    /** 系统 */
    SYSTEM = "SYSTEM",
    /** 个人 */
    PERSON = "PERSON"
}
