import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16500/doc.html#/default/计算方案相关/editUsingPOST
*/
export default function fetchMethod(options: { data: IComputeSchemeEditRequestDTO }, extraOptions?: any) {
    return http<IJSONResultstring>(
        {
            url: "/flow-service/calculationPlan/edit",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 计算方案编辑请求DTO */
export interface IComputeSchemeEditRequestDTO {
    /** ID */
    id?: number;
    /** 名称 */
    name?: string;
    /** 应用编码 */
    appCode?: string;
    /** 表格字段编码 */
    tableFieldCode?: string;
    /** 是否明细业务 */
    isDetailFlow?: ('Y' | 'N');
    /** 公式类型 */
    formulaType?: ('TIME_FUNCTION' | 'MATH_FUNCTION');
    /** 公式 */
    formula?: string;
    /** 计算模式 */
    calculationMode?: ('FIXED_TIME' | 'PERIODICITY');
    /** 固定时间 */
    fixedTime?: string;
    /** 计算周期 */
    calculationPeriod?: ('EVERY_DAY' | 'EVERY_MONTH' | 'EVERY_QUARTER' | 'EVERY_YEAR');
    /** 过滤条件列表 */
    filterConditionList?: ICalculationSchemeFilterConditionDTO[];
}
/** 计算方案过滤条件DTO */
export interface ICalculationSchemeFilterConditionDTO {
    /** 字段序列号 */
    fieldSerialNo?: string;
    /** 值列表 */
    values?: string[];
}
/** JSONResult«string» */
export interface IJSONResultstring {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ('Y' | 'N');
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
