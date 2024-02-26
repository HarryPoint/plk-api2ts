import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/批次方案相关/addUsingPOST_4
*/
export default function fetchMethod(options: { data: ILotSerialNumberPlanAddRequestDTO }, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/app-enterprise-web/api/app/enterprise/lotSerialNumberPlan/add",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** LotSerialNumberPlanAddRequestDTO */
export interface ILotSerialNumberPlanAddRequestDTO {
    /** 编码 */
    code?: string;
    /** 批次方案名称 */
    name?: string;
    /** 方案类型 */
    planType?: ('SERIAL_NO' | 'BATCH_NO');
    /** 规则列表 */
    ruleList?: ILotSerialNumberPlanRuleAddRequestDTO[];
}
/** LotSerialNumberPlanRuleAddRequestDTO */
export interface ILotSerialNumberPlanRuleAddRequestDTO {
    /** 规则类型 */
    type?: ('FIXED' | 'DATE' | 'AUTO_NUMBER' | 'FLOW_PATH_FIELD' | 'ID36');
    /** 日期类型 */
    dateFormat?: ('YEAR' | 'YEAR_MONTH' | 'YEAR_MONTH_DAY' | 'MONTH' | 'MONTH_DAY' | 'DAY');
    /** 应用引擎ID */
    flowPathId?: number;
    /** 应用引擎编码 */
    flowPathCode?: string;
    /** 字段编码 */
    flowPathFormFiledCode?: string;
    /** 字段序列号 */
    flowPathFormFiledSerialNo?: string;
    /** 值提取方法 */
    valueExtractMethod?: ('COMPLETE' | 'PART');
    /** 起始Index */
    startIndex?: number;
    /** 结束Index */
    endIndex?: number;
    /** 字符常量 */
    fixValue?: string;
    /** 规则长度 - 用于流水 */
    ruleLength?: number;
    /** 起始值 - 用于流水 */
    startValue?: number;
    /** 步长值 - 用于流水 */
    stepValue?: number;
    /** 方案ID */
    lotSerialNumberPlanId?: number;
    /** 排序 */
    sort?: number;
}
/** JSONResult«long» */
export interface IJSONResultlong {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: number;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
