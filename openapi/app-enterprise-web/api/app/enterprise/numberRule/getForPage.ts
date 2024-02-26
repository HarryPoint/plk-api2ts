import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/编码规则相关/getForPageUsingPOST_14
*/
export default function fetchMethod(options: { data: ICodeRulePagingQueryVO }, extraOptions?: any) {
    return http<IJSONResultPagingInformationEncodingRulePagingReturnsVO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/numberRule/getForPage",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 编码规则分页查询VO */
export interface ICodeRulePagingQueryVO {
    /** 流程id */
    flowPathId?: number;
    /** 当前页面 */
    pageNo?: number;
    /** 字段名称 */
    fieldName?: string;
    /** 分页大小 */
    pageSize?: number;
    /** 流程表单序列值集合 */
    flowPathFormFiledSerialNoList?: string[];
    /** 排序字段集 */
    orders?: IPagingSortVO[];
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: ('Y' | 'N');
}
/** JSONResult«分页信息«编码规则分页返回VO»» */
export interface IJSONResultPagingInformationEncodingRulePagingReturnsVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPagingInformationEncodingRulePagingReturnsVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 分页信息«编码规则分页返回VO» */
export interface IPagingInformationEncodingRulePagingReturnsVO {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: ITheEncodingRulePagingReturnsVO[];
    /** 最后页页码 */
    lastPage?: number;
    /** 是否有上一页 */
    hasPreviousPage?: ('Y' | 'N');
    /** 是否有下一页 */
    hasNextPage?: ('Y' | 'N');
    /** 上一页页码 */
    previousPage?: number;
    /** 下一页页码 */
    nextPage?: number;
}
/** 编码规则分页返回VO */
export interface ITheEncodingRulePagingReturnsVO {
    /** 数据状态 0停用，1启用，-1已删除 */
    dataStatus?: number;
    /** 创建员工id */
    createUserId?: number;
    /** 创建员工名称 */
    createUsername?: string;
    /** 创建时间 */
    createTime?: string;
    /** 更新员工id */
    updateUserId?: number;
    /** 更新员工名称 */
    updateUsername?: string;
    /** 更新时间 */
    updateTime?: string;
    /** id */
    id?: number;
    /** 规则类型 */
    type?: ('FLOW_PATH' | 'BUSINESS');
    /** 业务类型 */
    businessType?: ('PRODUCE_TASK' | 'STORAGE_TAKE_CHECK_TASK');
    /** 所属流程id */
    flowPathId?: number;
    /** 所属流程名称 */
    flowPathName?: string;
    /** 所属流程表单code */
    flowPathFormFiledCode?: string;
    /** 所属流程表单名称 */
    flowPathFormFiledName?: string;
    /** 所属流程表单序列值 */
    flowPathFormFiledSerialNo?: string;
    /** 是否是表格内字段 */
    isTableField?: ('Y' | 'N');
    /** 编码规则明细 */
    details?: IProcessFormFieldEncodingRuleDetailsVO[];
}
/** 流程表单字段编码规则明细VO */
export interface IProcessFormFieldEncodingRuleDetailsVO {
    /** id */
    id?: number;
    /** 设置类型 */
    type?: ('FIXED' | 'DATE' | 'AUTO_NUMBER' | 'FLOW_PATH_FIELD' | 'ID36');
    /** 日期格式 - 用于日期 */
    dateFormat?: ('YEAR' | 'YEAR_MONTH' | 'YEAR_MONTH_DAY' | 'MONTH' | 'MONTH_DAY' | 'DAY');
    /** 固定值 - 用于固定值 */
    fixValue?: string;
    /** 位数 - 用于流水 */
    ruleLength?: number;
    /** 初始值 - 用于流水 */
    startValue?: number;
    /** 递增值 - 用于流水 */
    stepValue?: number;
    /** 是否是编码依据 - 仅能配置一项为编码依据 */
    isCodeAccording?: ('Y' | 'N');
    /** 所属流程表单code -- 针对引用字段类型 */
    flowPathCode?: string;
    /** 所属流程表单字段序列值 -- 针对引用字段类型 */
    flowPathFormFiledSerialNo?: string;
    /** 所属流程表单字段序列值 -- 针对引用字段类型 */
    flowPathFormFiledCode?: string;
    /** 规则ID */
    flowPathFormFieldCodeNumberRuleId?: number;
    /** 排序 */
    sort?: number;
}
