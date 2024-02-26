import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16500/doc.html#/default/详细页面配置-相关/getByIdUsingGET_3
*/
export default function fetchMethod(options: { params: { id?: number } }, extraOptions?: any) {
    return http<IJSONResultFlowPathDetailPageConfigVO>(
        {
            url: "/flow-service/flowPathDetailPageConfig/getById",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«FlowPathDetailPageConfigVO» */
export interface IJSONResultFlowPathDetailPageConfigVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IFlowPathDetailPageConfigVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** FlowPathDetailPageConfigVO */
export interface IFlowPathDetailPageConfigVO {
    /** ID */
    id?: number;
    /** 引用当前表单的应用引擎编码 */
    refFlowPathCode?: string;
    /** 页签名称/别名 */
    aliasName?: string;
    /** 分组列表 */
    filterGroupList?: IConditionGroup2[];
}
/** 条件组_2 */
export interface IConditionGroup2 {
    /** 过滤组的ID */
    id?: number;
    /** 分页配置ID */
    flowPathDetailPageConfigId?: number;
    /** 过滤列表 */
    filterList?: IConditions[];
}
/** 条件 */
export interface IConditions {
    /** 过滤条件的ID */
    id?: number;
    /** 所属流程表单关联表单筛选条件组id */
    flowPathDetailPageFilterGroupId?: number;
    /** 所属流程表单字段id */
    flowPathDetailPageConfigId?: number;
    /** 被判断的字段序列号 */
    columnSerialNo?: string;
    /** 判断方式 */
    compareType?: string;
    /** 判断对象类型 */
    compareObjType?: string;
    /** 判断对象字段code */
    compareColumnSerialNo?: string;
    /** 判断对象字段的关联表单字段序列号 */
    compareColumnRpFormFieldSerialNo?: string;
    /** 判断对象自定义值 */
    compareCustomValue?: string;
    /** 判断对象自定义显示值 */
    compareCustomValueEcho?: string;
    /** 区间范围 -- 下限 */
    rangeLowerLimit?: string;
    /** 区间范围 -- 上限 */
    rangeUpperLimit?: string;
    /** 日期动态范围 */
    dateDynamicRange?: string;
    /** 是否使用日期的显示格式来做为筛选条件 */
    isUseDateShowFormat?: string;
}
