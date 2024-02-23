import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/动态数据相关/getFieldDataPageSelectorUsingPOST
export default function fetchMethod(data: IProcessAssociationFormSearchVO) {
    return http<IJSONResultProcessAssociationFormQueryReturnsVO>({
        url: "/masterdata-service/dynamicData/getFieldDataPageSelector",
        method: "post",
        data,
    });
}
// 流程关联表单搜索VO
export interface IProcessAssociationFormSearchVO {
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: IPagingSortVO[];
    // 非通用：查询表单编码， 即 当flowPathFormFieldId = null时，可以 flowPathCode、fieldSerialNo联合使用来查询关联表单数据
    flowPathCode: string;
    // 通用：模糊搜索值
    globalSearch: string;
    // 通用：业务数据ID（也叫表单记录ID列表）列表
    businessDataIdList: string[];
    // 通用：来自表单过滤条件，当 值 = Y 时，系统将忽略应用引擎配置的筛选条件。
    fromFormFilterCondition: string;
    // 非通用：查询表单id， 即 用户正在操作的关联表单。其和查询表单编码、字段序列号处于互斥
    flowPathFormFieldId: number;
    // 非通用：字段序列号， 即 当flowPathFormFieldId = null时，可以 flowPathCode、fieldSerialNo联合使用来查询关联表单数据
    fieldSerialNo: string;
    // 通用：提交项， 用户编辑的数据
    submitFieldsJsonObject: Record<string, Record<string, any>>;
    // 通用：精确匹配字段的字段编码
    matchingFieldCode: string;
    // 通用：精确匹配的值列表。1、精确匹配的字段优先是matchingFieldSerialNo。  2、再第一项不成立的时候，搜索的表.列。是关联表单显示字段的字段名、以及关联表单影响的列
    matchingValueList: string[];
}
// 分页排序VO
export interface IPagingSortVO {
    // undefined
    column: string;
    // undefined
    isAsc: string;
}
// JSONResult«流程关联表单查询返回VO»
export interface IJSONResultProcessAssociationFormQueryReturnsVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: ITheProcessAssociationFormQueryReturnsVO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 流程关联表单查询返回VO
export interface ITheProcessAssociationFormQueryReturnsVO {
    // 选择框样式
    style: string;
    // 关联表单选项显示字段code
    formRpSelectorShowFieldCode: string;
    // 关联表单选项显示字段Serial No
    formRpSelectorShowFieldSerialNo: string;
    // 字段列表
    fieldList: ITheProcessAssociationFormHeaderQueryReturnsVO[];
    // 数据列表
    dataList: IMapstringstring[];
}
// 流程关联表单表头查询返回VO
export interface ITheProcessAssociationFormHeaderQueryReturnsVO {
    // code
    code: string;
    // 名称
    name: string;
    // 序列号
    serialNo: string;
    // 选项集
    selectorList: IFormFieldOption[];
    // 表单类型
    formFieldType: string;
    // 日期类型
    dateType: string;
}
// FormFieldOption
export interface IFormFieldOption {
    // undefined
    name: string;
    // undefined
    code: string;
    // undefined
    color: string;
}
// Map«string,string»
export interface IMapstringstring {
}
