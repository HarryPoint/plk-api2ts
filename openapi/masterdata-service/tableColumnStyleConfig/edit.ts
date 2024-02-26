import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/列表列样式配置/editUsingPOST_24
*/
export default function fetchMethod(options: { data: IListColumnStyleConfigurationEditDTOparams: { enterpriseId?: number, extraOptions?: any) {
    return http<IJSONResultListColumnStyleConfigurationEditDTO>(
        {
            url: "/masterdata-service/tableColumnStyleConfig/edit",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 列表列样式配置编辑DTO */
export interface IListColumnStyleConfigurationEditDTO {
    /** id */
    id?: number;
    /** 名称 */
    name?: string;
    /** 编码 */
    code?: string;
    /** 类型 */
    type?: string;
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
    ts?: number;
}
