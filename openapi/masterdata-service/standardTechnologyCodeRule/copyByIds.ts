import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/标准工艺编码规则相关/copyByIdsUsingPOST
export default function fetchMethod(data: number[]) {
    return post<IJSONResultListStandardProcessCodingRulesCopyResponseDtos>({
      url: "/masterdata-service/standardTechnologyCodeRule/copyByIds",
      data,
    });
}
// JSONResult«List«标准工艺编码规则复制响应 DTO»»
export interface IJSONResultListStandardProcessCodingRulesCopyResponseDtos {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IStandardProcessCodingRulesCopyResponseDTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 标准工艺编码规则复制响应 DTO
export interface IStandardProcessCodingRulesCopyResponseDTO {
    // id
    id: number;
    // 原始id
    originalId: number;
    // 名称
    name: string;
    // 规则明细
    details: IStandardProcessCodingRulesDetailCopyResponseDTO[];
}
// 标准工艺编码规则明细拷贝响应 DTO
export interface IStandardProcessCodingRulesDetailCopyResponseDTO {
    // id
    id: number;
    // 原始id
    originalId: number;
    // 类型
    type: string;
    // 应用表格列code - 类型是应用时有值
    flowPathTableColumnCode: string;
    // 流水号位数 - 类型是流水号时有值
    serialNoDigit: number;
    // 流水号起始值 - 类型是流水号时有值
    serialNoStartValue: number;
    // 流水号步长值 - 类型是流水号时有值
    serialNoStepValue: number;
    // 日期格式 - 类型是日期时有值
    dateFormat: string;
    // 固定值 - 类型是固定值时有值
    fixValue: string;
}
