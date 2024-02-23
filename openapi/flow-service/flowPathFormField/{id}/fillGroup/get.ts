import { get } from '@/api/http';
 
// http://47.108.139.107:16500/doc.html#/default/流程表单字段相关/getFilterGroupsUsingGET
export default function fetchMethod(params: { enterpriseId: number }) {
    return get<ITheJSONResultListProcessFormAssociatesTheFormFilterGroupVO['data']>({
      url: "/flow-service/flowPathFormField/{id}/fillGroup/get",
      params,
    });
}
// JSONResult«List«流程表单关联表单筛选条件组VO»»
export interface ITheJSONResultListProcessFormAssociatesTheFormFilterGroupVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IProcessFormsAssociateFormFilterGroupVO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 流程表单关联表单筛选条件组VO
export interface IProcessFormsAssociateFormFilterGroupVO {
    // id
    id: number;
    // 条件组名称
    name: string;
    // 条件集
    filters: IProcessFormsAssociateFormFilterVO[];
    // 是否系统默认条件组，条件集 => Y 表示系统默认条件组（每个字段有且最多只有1个系统默认条件组），N - 用户自定义条件组
    isSystemDefault: string;
    // 数据联动ID
    dataLinkageId: number;
    // 表单字段ID
    flowPathFormFieldId: number;
}
// 流程表单关联表单筛选条件VO
export interface IProcessFormsAssociateFormFilterVO {
    // id
    id: string;
    // 被判断的字段序号值
    columnSerialNo: string;
    // 判断方式
    compareType: string;
    // 判断对象类型
    compareObjType: string;
    // 判断对象字段序号值
    compareColumnSerialNo: string;
    // 判断对象字段的关联表单字段序列号
    compareColumnRpFormFieldSerialNo: string;
    // 判断对象自定义值
    compareCustomValue: string;
    // 自定义值回显
    compareCustomValueEcho: string;
    // 所属流程表单关联表单筛选条件组id
    flowPathFormFieldFormRpFilterGroupId: number;
    // 区间范围 -- 下限
    rangeLowerLimit: string;
    // 区间范围 -- 上限
    rangeUpperLimit: string;
    // 日期动态范围
    dateDynamicRange: string;
    // 是否使用日期的显示格式来做筛选 - Y 代表将使用显示格式来做数据筛选。-N 代表不使用显示格式作为数据筛选。 
    isUseDateShowFormat: string;
    // 禁用编辑，不填或者N代表不禁止。Y代表禁止不能编辑
    isDisableEdit: string;
}
