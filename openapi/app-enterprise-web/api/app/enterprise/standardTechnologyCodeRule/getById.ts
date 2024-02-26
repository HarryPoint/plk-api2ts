import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/标准工艺编码规则相关/getByIdUsingPOST_3
*/
export default function fetchMethod(data: IIdInformation, extraOptions?: any) {
    return http<IJSONResultStandardProcessCodingRulesRespondToDtos>(
        {
            url: "/app-enterprise-web/api/app/enterprise/standardTechnologyCodeRule/getById",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** id信息 */
export interface IIdInformation {
    /** id */
    id: number;
}
/** JSONResult«标准工艺编码规则响应 DTO» */
export interface IJSONResultStandardProcessCodingRulesRespondToDtos {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: IStandardProcessCodingRulesRespondToDtos;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
/** 标准工艺编码规则响应 DTO */
export interface IStandardProcessCodingRulesRespondToDtos {
    /** id */
    id: number;
    /** 名称 */
    name: string;
    /** 规则明细 */
    details: IStandardProcessCodingRulesDetailResponseDTO[];
}
/** 标准工艺编码规则明细响应 DTO */
export interface IStandardProcessCodingRulesDetailResponseDTO {
    /** id */
    id: number;
    /** 类型 */
    type: string;
    /** 应用表格列code - 类型是应用时有值 */
    flowPathTableColumnCode: string;
    /** 流水号位数 - 类型是流水号时有值 */
    serialNoDigit: number;
    /** 流水号起始值 - 类型是流水号时有值 */
    serialNoStartValue: number;
    /** 流水号步长值 - 类型是流水号时有值 */
    serialNoStepValue: number;
    /** 日期格式 - 类型是日期时有值 */
    dateFormat: string;
    /** 固定值 - 类型是固定值时有值 */
    fixValue: string;
}
