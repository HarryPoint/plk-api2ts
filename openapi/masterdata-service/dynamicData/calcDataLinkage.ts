import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.139.107:16700/doc.html#/default/动态数据相关/calcDataLinkageUsingPOST
*/
export default function fetchMethod(options: { data: IDataLinkageCalcRequestDTO }, extraOptions?: any) {
    return http<IJSONResultDataLinkageCalcResponseDTO>(
        {
            url: "/masterdata-service/dynamicData/calcDataLinkage",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** DataLinkageCalcRequestDTO */
export interface IDataLinkageCalcRequestDTO {
    /** 表单字段ID */
    flowPathFormFieldId?: string;
    /** 表单记录ID */
    fromRecord?: Record<string, Record<string, any>>;
}
/** JSONResult«DataLinkageCalcResponseDTO» */
export interface IJSONResultDataLinkageCalcResponseDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IDataLinkageCalcResponseDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** DataLinkageCalcResponseDTO */
export interface IDataLinkageCalcResponseDTO {
    /** 默认值 */
    defaultValue?: string;
}
