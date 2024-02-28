import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16400/doc.html#/default/列表列样式配置/editUsingPOST_28
*/
export default function fetchMethod(options: { data: IListColumnStyleConfigurationEditDTO }, extraOptions?: any) {
    return http<IJSONResultListColumnStyleConfigurationEditDTO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/tableColumnStyleConfig/edit",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 列表列样式配置编辑DTO */
export interface IListColumnStyleConfigurationEditDTO {
    /** id */
    id?: string;
    /** 名称 */
    name?: string;
    /** 编码 */
    code?: string;
    /** 类型 */
    type?: EListColumnStyleConfigurationEditDTO_type;
    /** 列配置JSON */
    config?: Record<string, Record<string, any>>;
}
/** JSONResult«列表列样式配置编辑DTO» */
export interface IJSONResultListColumnStyleConfigurationEditDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IListColumnStyleConfigurationEditDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EListColumnStyleConfigurationEditDTO_type {
    /** 系统 */
    SYSTEM = "SYSTEM",
    /** 个人 */
    PERSON = "PERSON"
}
