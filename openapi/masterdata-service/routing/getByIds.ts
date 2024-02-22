import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/工艺路径相关/getByIdsUsingPOST_5
export function fetchMethod(data: number[], params: { enterpriseId: number }) {
    return post({
      url: "/masterdata-service/routing/getByIds",
      data,
      params,
    });
}
// JSONResult«List«基础VO»»_2
export interface IJSONResultListBaseVO2 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IBasicVO2[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 基础VO_2
export interface IBasicVO2 {
    // id
    id: number;
    // 数据状态 0停用，1启用，-1已删除
    dataStatus: number;
    // 创建员工id
    createUserId: number;
    // 创建部门id
    createDeptId: number;
    // 创建时间
    createTime: string;
    // 修改账户id
    updateUserId: number;
    // 修改部门id
    updateDeptId: number;
    // 更新时间
    updateTime: string;
    // 所属企业id
    enterpriseId: number;
    // 工艺路径编码
    code: string;
    // 工艺路径名称
    name: string;
    // 所属主物料id
    materialId: number;
    // 所属主物料bomid
    materialBomId: number;
    // 是否默认
    isDefault: string;
}
