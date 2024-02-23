import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/标准工艺具体物料节点相关/modifyUsingPOST_1
export default function fetchMethod(data: IStandardProcessSpecificMaterialNodeModificationRequestObject, extraOptions?: any) {
    return http<IJSONResultMaterialBOMEditResponseObject>(
        {
            url: "/masterdata-service/standardTechnologySpecificMaterialNode/modify",
            method: "post",
            data,
        },
        extraOptions,
    );
}
// 标准工艺具体物料节点修改请求对象
export interface IStandardProcessSpecificMaterialNodeModificationRequestObject {
    // 当前的标准工艺id, 创建标准工艺阶段 传递null, 编辑标准工艺阶段 传递编辑的标准工艺id
    standardTechnologyId: number;
    // 主物料id
    id: number;
    // bomId
    bomId: number;
    // BOM名称
    bomName: string;
    // BOM编号
    bomCode: string;
    // 物料BOM详情id (针对所属上级bom的而言的详情id)
    materialBomDetailId: number;
    // 消耗数量(针对所属上级bom而言的消耗数量)
    totalConsumeCount: number;
    // BOM明细
    bomDetailList: IStandardProcessModifyTheRequestObjectForBomDetailsOnASpecificMaterialNode[];
}
// 标准工艺具体物料节点修改bom详情请求对象
export interface IStandardProcessModifyTheRequestObjectForBomDetailsOnASpecificMaterialNode {
    // bom明细id, 新增加的行传递空, 编辑的行传递明细id
    bomDetailId: number;
    // 子物料id
    id: number;
    // 消耗数量 消耗数量必须大于0
    totalConsumeCount: number;
}
// JSONResult«物料BOM编辑响应对象»
export interface IJSONResultMaterialBOMEditResponseObject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IMaterialBOMEditResponseObject;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 物料BOM编辑响应对象
export interface IMaterialBOMEditResponseObject {
    // bom id
    id: number;
    // bom code
    code: string;
    // 子物料列表
    childMaterialList: IBomDetailsResponseObject[];
}
// 物料bom详情响应对象
export interface IBomDetailsResponseObject {
    // 物料BOM详情id
    materialBomDetailId: number;
    // 所属物料bom id
    materialBomId: number;
    // 子物料id
    id: number;
    // 子物料名称
    name: string;
    // 子物料编号
    code: string;
    // 子物料类型
    type: string;
    // 子物料类型名称
    typeName: string;
    // 物料单位
    unit: string;
    // 消耗数量
    totalConsumeCount: number;
}
